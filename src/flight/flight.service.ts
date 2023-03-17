import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FLIGHT } from '../common/models/models';

import * as bcrypt from 'bcrypt';
import { FlightDTO } from './dto/flight.dto';
import { IFlight } from '../common/interfaces/flight.intereface';


@Injectable()
export class FlightService {
    constructor(@InjectModel(FLIGHT.name) private readonly vuelomodelo:Model<IFlight>){}
    
    async insertar (vueloDTO: FlightDTO):Promise<FlightDTO>{
        const nuevoVuelo = new this.vuelomodelo({...vueloDTO});
        return nuevoVuelo.save();
    }
    async todos():Promise<IFlight[]>{
        return await this.vuelomodelo.find();
    }
    async uno(id:string):Promise<IFlight>{
        return await this.vuelomodelo.findById(id);
    }
    async actualizar(id: string, vueloDTO:FlightDTO):Promise<IFlight>{
        const nuevoUsuario = new this.vuelomodelo({...vueloDTO});
        return await this.vuelomodelo.findByIdAndUpdate(id, vueloDTO, {new:true});
    }
    async eliminar(id:string){
        await this.vuelomodelo.findByIdAndDelete(id);
        return {status: HttpStatus.OK, msg:'Se eliminó correctamente'};
    }
}
