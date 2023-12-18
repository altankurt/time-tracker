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
};

export default IndexPage;
