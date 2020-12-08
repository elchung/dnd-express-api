import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {CharacterData} from "./CharacterData";

@Entity()
export class CharacterAbilityScores {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(type => CharacterData, character => character.abilityScores)
  @JoinColumn()
  character!: CharacterData;

  @Column()
  strength?: number;

  @Column()
  dexterity?: number;

  @Column()
  constitution?: number;

  @Column()
  intelligence?: number;

  @Column()
  wisdom?: number;

  @Column()
  charisma?: number;
}
