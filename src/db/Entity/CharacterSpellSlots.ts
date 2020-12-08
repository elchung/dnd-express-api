import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {CharacterData} from "./CharacterData";

@Entity()
export class CharacterSpellSlots {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(type => CharacterData, character => character.spellSlots)
  @JoinColumn()
  character!: CharacterData;

  @Column()
  oneMax?: number;

  @Column()
  oneUsed?: number;

  @Column()
  twoMax?: number;

  @Column()
  twoUsed?: number;

  @Column()
  threeMax?: number;

  @Column()
  threeUsed?: number;

  @Column()
  fourMax?: number;

  @Column()
  fourUsed?: number;

  @Column()
  fiveMax?: number;

  @Column()
  fiveUsed?: number;

  @Column()
  sixMax?: number;

  @Column()
  sixUsed?: number;

  @Column()
  sevenMax?: number;

  @Column()
  sevenUsed?: number;

  @Column()
  eightMax?: number;

  @Column()
  eightUsed?: number;

  @Column()
  nineMax?: number;

  @Column()
  nineUsed?: number;

}
