import  {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
    
} from 'firebase/auth'

import{
getFirestore,
doc,
getDoc,
setDoc,
collection,
writeBatch,
query,
getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDQQXQbkAyFv8TkciwPm1G7PBVb0xYpZkw",
    authDomain: "electronix-db.firebaseapp.com",
    projectId: "electronix-db",
    storageBucket: "electronix-db.appspot.com",
    messagingSenderId: "246500782590",
    appId: "1:246500782590:web:6032440473f21923c110af"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:'select_account',
  })
  export const auth=getAuth();
  export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);
  export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);
  
  export const db=getFirestore();


  export const addCollectionandDocuments=async(collectionkey,objectstoadd)=>{

    const collectionref=collection(db,collectionkey);
    const batch=writeBatch(db);

    objectstoadd.forEach((object)=>{
        const docref=doc(collectionref,object.title.toLowerCase());
        batch.set(docref,object);
    });
    await batch.commit();
    console.log('done')
  }




  export const getcategoriesanddocument=async ()=>{
    const collectionref=collection(db,'categories'); 
    const q=query(collectionref);
    
    const querysnapshot=await getDocs(q); 
    const categorymap=querysnapshot.docs.reduce((acc,docsnapshot)=>{
        const {title,items}=docsnapshot.data();
        acc[title.toLowerCase()]=items;
        return acc;
    },{});
    return categorymap;
  }






  export const createUserDocumeneFromAuth= async (userAuth,addimf={})=>{
    if(!userAuth)
    return ;
    const userDocref=doc(db,'users',userAuth.uid);

    console.log(userDocref)

    const userSnapshot=await getDoc(userDocref);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())
    // so here we will come to know whether the user exists or not is if does not exist 
    // then we will create a new use with the name email ,time and date on the time of creation

        if(!userSnapshot.exists())
        {
            const {displayName,email}=userAuth;
            const createdat=new Date();
            try{
                await setDoc(userDocref,{
                    displayName,
                    email,
                    createdat,
                    ...addimf
                }); 
                alert('Account  has been sucessfully created');
            } catch(error){
                console.log('the is an error while creating the user',error.message);
            }

        }
        else
        {
            console.log('user already exist');
        }

        return userDocref;
}


export const createAuthUserWithEmailAndPassword= async (email,password)=>{
    if(!email || !password)
    return ;

    return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword= async (email,password)=>{
    if(!email || !password)
    return ; 
    return await signInWithEmailAndPassword(auth,email,password);
}

export const signoutuser= async()=> await signOut(auth) 


export const onAuthStateChangedlistner=(callback)=>onAuthStateChanged(auth,callback);