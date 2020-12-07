import {Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany} from "typeorm";
import {CharacterTreasureMoney} from './CharacterTreasureMoney';
import {CharacterTreasureItem} from "./CharacterTreasureItems";

@Entity()
export class CharacterTreasure {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => CharacterData, character => character.treasure)
  @JoinColumn()
  character: CharacterData;

  @OneToOne(type => CharacterTreasureMoney, money => money.parentTreasure, { cascade: true })
  money: CharacterTreasureMoney;

  @OneToMany(type => CharacterTreasureItem, items => items.parentTreasure)
  items: CharacterTreasureItem[];
}
