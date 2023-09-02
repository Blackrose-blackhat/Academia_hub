import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";

import GoogleButton from "react-google-button";
import { getAdditionalUserInfo, signInWithPopup } from "firebase/auth";

import { provider } from "../services/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
const AuthDialog = ({ open, onClose }) => {
    let navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);




    const googleAuthLogin = async () => {
        const user = await signInWithPopup(auth, provider).then((res) => {
            const { isNewUser } = getAdditionalUserInfo(res);

            if (isNewUser) {

                const curr_user = auth.currentUser;
                curr_user.delete().then(async () => {
                    ("deleted");
                    toast.error("Account does not exist!");

                })

                    .catch((e) => {

                    })
                localStorage.clear();
            }
            else {
                toast.success("Login successful");


                localStorage.setItem("users", user?.uid);
            }
        })
    }

    const googleAuthSignup = async () => {

        const user = await signInWithPopup(auth, provider).then((res) => {
            const { isNewUser } = getAdditionalUserInfo(res);
            if (isNewUser) {
                navigate("/");
                toast.success("Account created successful");
            }
            else {
                auth.signOut();
                localStorage.clear();
                auth.currentUser.delete()
                toast.error("User already registered , login to continue");


            }
        })
            .catch((e) => { })
    }

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                {isLogin ? <h2>Log In</h2> : <h2>Sign Up</h2>}



                <div className="flex flex-row w-full justify-center md:p-10">
                    <GoogleButton onClick={isLogin ? googleAuthLogin : googleAuthSignup} label={isLogin ? "Login With Google" : "Sign in with google"} />
                </div>


                <p onClick={toggleAuthMode} className="cursor-pointer text-blue-600 font-bold" >
                    {isLogin
                        ? "Don't have an account? Sign Up"
                        : "Already have an account? Log In"}
                </p>



            </DialogContent>
        </Dialog>
    );
};

export default AuthDialog;
