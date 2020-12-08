import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import {CharacterData} from "./CharacterData";

@Entity()
export class CharacterSettings {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  abilityScoreOnTop!: boolean;

  @OneToOne(type => CharacterData, character => character.knownSpells)
  @JoinColumn()
  character!: CharacterData;
}
