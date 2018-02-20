import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemsModel } from '../models/items.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ArmorModel } from '../models/armor.model';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { AppDataProvider } from '../providers/app-data.provider';

import * as _ from 'lodash';
import { WeaponModel } from '../models/weapon.model';
import { SkillModel } from '../models/skill.model';
import { ItemType } from '../types/item.type';
import { ItemModel } from '../models/item.model';

@Injectable()
export class ItemsService {
    constructor(
        private appData: AppDataProvider
    ) { }

    getItems(type: ItemType): ItemModel[] {
        if (type == ItemType.Weapon) {
            return this.appData.getWeapons();
        } else {
            return _.filter(this.appData.getArmor(), armor => armor.type === type);
        }
    }

    getAllWeapons(): WeaponModel[] {
        return this.appData.getWeapons();
    }

    getWeapon(id: string): WeaponModel {
        return _.find(this.appData.getWeapons(), weapon => weapon.id === id);
    }

    getAllArmor(): ArmorModel[] {
        return this.appData.getArmor();
    }

    getArmor(id: string): ArmorModel {
        return _.find(this.appData.getArmor(), armor => armor.id === id);
    }

    getAllSkills(): SkillModel[] {
        return this.appData.getSkills();
    }

    getSkill(id: string): SkillModel {
        return _.find(this.appData.getSkills(), skill => skill.id === id);
    }
}
