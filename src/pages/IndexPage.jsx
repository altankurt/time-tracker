import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, deleteDoc, query, where } from "firebase/firestore";
import { db } from '../../firebase-config';


const IndexPage = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    }).catch((error) => {
      console.error("Logout Error:", error);
    });
  };

  const collectionRef = collection(db, "time_log");
  const fetchLogs = async () => {
    const logsCollection = await getDocs(query(collectionRef, where("author", "==", auth.currentUser.uid)));
    logsCollection.forEach((doc) => {
      setLogs(prevLogs => {
        return [...prevLogs, doc.data()].reduce((acc, current) => {
          const x = acc.find(item => item.date?.seconds === current.date?.seconds);
            if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []).sort((a,b)=> b.date - a.date)
      });
    });
  }

  const handleStop = async () => {
    setTimerOn(false);

    if (time >= 1000) {
      const description = taskDescription || 'Current Task';
     
      try {
        await addDoc(collection(db, 'time_log'), { author : auth.currentUser.uid, description, time, date: new Date() });
        await fetchLogs();
        
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      await fetchLogs(); 
    }    
    setTime(0);
    setTaskDescription('');
  };

  function formatDate(date) {
    if (!date) {
      return '';
    }
  
    const d = new Date(date.toDate());
  
    const pad = (num) => num.toString().padStart(2, '0');
  
    const day = pad(d.getDate());
    const month = pad(d.getMonth() + 1);
    const year = d.getFullYear();

  
    return `${day}/${month}/${year}`;
  }

  const handleDelete = async (date) => {
    const logsCollection = await getDocs(collection(db, "time_log"));
    logsCollection.forEach(async (doc) => {
      if (doc.data().date?.seconds === date?.seconds) {
        deleteDoc(doc.ref);
      }
    });
    setTimeout(() => {
      fetchLogs();
    }, 1000);
  };
  
  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">TimeTune</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </nav>
    </div>
  );
};

export default IndexPage;
