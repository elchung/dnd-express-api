import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import {CharacterData} from "./CharacterData";

export class CharacterHitDice {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => CharacterData, character => character.hitDice)
  @JoinColumn()
  character!: CharacterData;

  @Column()
  numDice?: number;

  @Column()
  diceType?: number;

  @Column()
  numUsed?: number;
}

