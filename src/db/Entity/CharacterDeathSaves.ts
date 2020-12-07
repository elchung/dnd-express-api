import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {CharacterData} from "./CharacterData";

@Entity()
export class CharacterDeathSaves {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => CharacterData, character => character.deathSaves)
  @JoinColumn()
  character: CharacterData;

  @Column()
  successes: number;

  @Column()
  failures: number;
}
