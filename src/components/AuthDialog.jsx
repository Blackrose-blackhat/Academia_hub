import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleButton from "react-google-button";
import { createUserWithEmailAndPassword, getAdditionalUserInfo, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, provider } from "../services/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
const AuthDialog = ({ open, onClose }) => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login or signup logic here
        console.log("Email:", email);
        console.log("username", username);
        console.log("Password:", password);
        console.log('ConfirmPassword', confirmPassword)

        if (isLogin) {
            try {
                if (email && password) {
                    await signInWithEmailAndPassword(auth, email, password);
                    toast.success("Login Successfull");
                    navigate("/");
                }
                else {
                    toast.error("Please enter email and password");
                }
            } catch (error) {
                if ((error.code = "400")) {
                    toast.error(`Invalid Email or Password`);
                    setEmail("");
                    setPassword("");
                }


            }
        }
        else {
            try {
                if (password !== confirmPassword) {
                    toast.error("Password doesn't match");

                }
                if (email && password && confirmPassword) {
                    const { user } = await createUserWithEmailAndPassword(auth, email, password);
                    await setDoc(doc(db, "users", user.uid), {
                        username: username,
                        email: email,
                        password: password
                    })
                    toast.success("Account created succesfully");
                    localStorage.setItem("users", user?.uid);

                }
                else {
                    toast.error("All fields are mandatory!");
                }
            } catch (error) {


            }
        }  // You can implement the authentication logic using your preferred method (e.g., API calls)
    };

    const googleAuthLogin = async () => {
        const user = await signInWithPopup(auth, provider).then((res) => {
            const { isNewUser } = getAdditionalUserInfo(res);

            if (!isNewUser) {
                navigate("/");
                toast.success("Login successful");
                window.location.reload(false);
                localStorage.setItem("users", user?.uid);

            }
            else {
                const curr_user = auth.currentUser;
                curr_user.delete().then(async () => {
                    ("deleted");
                    toast.error("Account does not exist!");

                })

                    .catch((e) => {

                    })
                localStorage.clear();
            }
        })
    }

    const googleAuthSignup = async () => {

        const user = await signInWithPopup(auth, provider).then((res) => {
            const { isNewUser } = getAdditionalUserInfo(res);
            if (!isNewUser) {
                auth.signOut();
                localStorage.clear();
                toast.error("User already registered , login to continue");
                navigate("/");
            }
            else {
                navigate("/");
                toast.success("Account created successful");

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
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <TextField
                            label="Username"
                            type="string"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                    )}
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    {!isLogin && (
                        <TextField
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                    )}
                    <div className="w-full flex flex-row justify-center md:p-2">
                        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                            {isLogin ? "Log In" : "Sign Up"}
                        </Button>
                    </div>
                    <div className="text-center">
                        Or
                    </div>
                    <div className="flex flex-row w-full justify-center md:p-10">
                        <GoogleButton onClick={isLogin ? googleAuthLogin : googleAuthSignup} />
                    </div>


                    <p onClick={toggleAuthMode} className="cursor-pointer text-blue-600 font-bold" >
                        {isLogin
                            ? "Don't have an account? Sign Up"
                            : "Already have an account? Log In"}
                    </p>
                </form>


            </DialogContent>
        </Dialog>
    );
};

export default AuthDialog;
