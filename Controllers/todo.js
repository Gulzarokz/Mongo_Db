import express from "express";
import todo from "../Models/todo.js";



export const createTodo = async (req, res) => {
    try {
        const {title, description} = req.body;
        if(!title || !description){
            return res.status(403).json({
                success : false,
                message : "All fields are required",
            });
        }
    const Todo = new todo({title, description});
    Todo.save();
    return res.status(201).json({
        success : true,
        message : "todo created successfully",
        todo 
    })
        
    } catch (error) {
        console.log(error);
        
        
    }
};

export const getAllTodos = async (req, res) => {
 try {
    const todos = await todo.find();
    return res.status(200).json({
        success : true,
        todos
    })
 } catch (error) {
    console.log(error);
    
    
 } 
}