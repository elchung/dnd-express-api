import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import {CharacterData} from "./CharacterData";

@Entity()
export class CharacterFeaturesAndTraits {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(type => CharacterData, character => character.featuresAndTraits)
  @JoinColumn()
  character!: CharacterData;

  @Column()
  index!: number;

  @Column()
  title?: string;

  @Column()
  body?: string;
}
