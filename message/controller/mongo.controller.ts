import mongoose from 'mongoose'
import {Users, typeUserSchema} from '../../databases/model'
import {enumCommand, Logger} from "../../utils/logger";

export const addUser = (data : typeUserSchema) => {
    return new Users(data)
        .save()
        .then(val => {
            Logger.done(val, enumCommand.MNGO)
            return val
        })
        .catch(err => {
            Logger.error(err, enumCommand.MNGO)
            return new Error(err)
        })
}