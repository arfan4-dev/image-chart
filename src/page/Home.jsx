import React, { useContext,useState } from "react";
import { Context } from "../component/ContextApp";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import Loader from "../component/Loader";
const Home = () => {
  const navigate = useNavigate();
  const { currentUser, UserId } = useContext(Context);
  const [loader, setLoader] = useState(false);
  console.log("UserId", UserId);
  console.log(currentUser.email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    setLoader(true);
    try {
      //Create a unique image name
      if (file) {
        const date = new Date().getTime();
        const storageRef = ref(storage, `${date}`);
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(currentUser, {
                photoURL: downloadURL,
              });

              await setDoc(doc(db, "users", currentUser.email), {
                UserId: date,
                email: currentUser.email,
                photoURL: downloadURL,
              });
              navigate("/displayPhoto");
              //create user on firestore
              // Fetch the user document from Firestore
              const userDocRef = doc(db, "users", currentUser.email);
              const userDoc = await getDoc(userDocRef);

              if (userDoc.exists()) {
                const existingPhotoURLs = userDoc.data().photoURLs || [];
                const updatedPhotoURLs = [...existingPhotoURLs, downloadURL];

                // Update the Firestore document with the updated array of photo URLs
                await updateDoc(userDocRef, {
                  photoURLs: updatedPhotoURLs,
                });
              }
            } catch (err) {
              console.log(err);
            }
          });
        });
      }
    } catch (err) {
      console.log("error from navHome", err);
    }
    setLoader(false)

  };
  return (
    <div>
      <Navbar />
      <div>
        <div
          className="relative min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
            <div className="text-center">
              <h2 className="mt-5 text-3xl font-bold text-gray-900">
                File Upload!
              </h2>
              <p className="mt-2 text-sm text-gray-400"></p>
            </div>
            <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">
                  Attach Document
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                    <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                      <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                        <img
                          className="has-mask h-36 object-center"
                          src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                          alt="freepik image"
                        />
                      </div>
                      <p className="pointer-none text-gray-500 ">
                        <span className="text-sm">Drag and drop</span> files
                        here <br /> or{" "}
                        <span className="text-blue-600 hover:underline">
                          select a file
                        </span>{" "}
                        from your computer
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span>File type: png,jpeg types images</span>
              </p>
              <div>
                {loader?(  <button
                  type="submit"
                  className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  <Loader/>
                </button>):(  <button
                  type="submit"
                  className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Upload
                </button>)}
              
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
