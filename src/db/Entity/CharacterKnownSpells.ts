import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import {CharacterData} from "./CharacterData";

@Entity()
export class CharacterKnownSpells {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(type => CharacterData, character => character.knownSpells)
  @JoinColumn()
  character!: CharacterData;

  @Column()
  zero?: string[];

  @Column()
  one?: string[];

  @Column()
  two?: string[];

  @Column()
  three?: string[];

  @Column()
  four?: string[];

  @Column()
  five?: string[];

  @Column()
  six?: string[];

  @Column()
  seven?: string[];

  @Column()
  eight?: string[];

  @Column()
  nine?: string[];
}
