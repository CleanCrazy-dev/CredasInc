import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { transformer } from "./transformer";
import { UserEntity } from "./UserEntity";

@Entity({ name: "sessions" })
export class SessionEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("nvarchar", { unique: true, length: 2048 })
  sessionToken!: string;

  @Column("nvarchar", { transformer: transformer.date })
  expires!: string;

  @Column({ type: "uuid" })
  userId!: string;

  // @ManyToOne(() => UserEntity, (user) => user.sessions)
  @JoinColumn({ name: "userId" })
  user!: UserEntity;
}
