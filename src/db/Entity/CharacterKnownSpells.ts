import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import {CharacterData} from "./CharacterData";

@Entity()
export class CharacterKnownSpells {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(type => CharacterData, character => character.knownSpells)
  @JoinColumn()
  character!: CharacterData;

  @Column("text", { array: true })
  zero?: string[];

  @Column("text", { array: true })
  one?: string[];

  @Column("text", { array: true })
  two?: string[];

  @Column("text", { array: true })
  three?: string[];

  @Column("text", { array: true })
  four?: string[];

  @Column("text", { array: true })
  five?: string[];

  @Column("text", { array: true })
  six?: string[];

  @Column("text", { array: true })
  seven?: string[];

  @Column("text", { array: true })
  eight?: string[];

  @Column("text", { array: true })
  nine?: string[];
}
