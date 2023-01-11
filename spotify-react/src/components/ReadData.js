import React from "react";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

export function ReadData() {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAuc9-eYXSIYDM5BFkTDh-hDlm39Zan8Uo",
      authDomain: "react-spotify-60bcb.firebaseapp.com",
      projectId: "react-spotify-60bcb",
      storageBucket: "react-spotify-60bcb.appspot.com",
      messagingSenderId: "402482626897",
      appId: "1:402482626897:web:4bdd1aa6dbf40e361fd370",
    };
    firebase.initializeApp(config);

    // Get data from Firebase
    firebase
      .database()
      .ref("/favorite")
      .on("value", (snapshot) => {
        setData(snapshot.val());
      });
  }, []);

  console.log(data);
  return (
    <div>
      {data ? (
        <p>
          {data.image} / {data.name}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

//   export default ReadData;
