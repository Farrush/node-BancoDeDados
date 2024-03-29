import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    let users = await User.findAll()
    res.render('pages/home', {
        users,
    });
};

export const novoUsuario = async(req: Request, res: Response)=>{
    let {nome,idade}=req.body

    if(nome){
        const newUser = User.build()
        newUser.name = nome
        if (idade){
            newUser.age = parseInt(idade)
            
        }
    await newUser.save()
    }

    

    res.redirect('/')
}