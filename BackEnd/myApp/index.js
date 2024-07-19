const express=require("express");
const app=express();
const sqlite3=require("sqlite3");
const {open}=require("sqlite");
const path=require("path");

const dbPath=path.join(__dirname,"user.db")
let db=null;
const initiliazeDBAndServer=async()=>{
    try{
        db=await open({
            filename:dbPath,
            driver:sqlite3.Database

        });
        app.listen(3000,()=>{
            console.log("Server Started");
        })

    }
    catch(e){
        console.log("db Error");
        process.exit(1);
    }

}

initiliazeDBAndServer()