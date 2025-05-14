import React from 'react'
import { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db, auth } from '../Firebase-config';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";












const Home = () => {
  return (
    <div>
      home page 
    </div>
  )
}

export default Home
