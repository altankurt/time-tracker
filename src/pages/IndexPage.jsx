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

};

export default IndexPage;
