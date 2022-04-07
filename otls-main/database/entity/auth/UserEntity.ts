import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { AccountEntity } from "./AccountEntity";
// import { SessionEntity } from "./SessionEntity";
import { transformer } from "./transformer";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar", { nullable: true })
  name!: string | null;

  @Column("varchar", {
    unique: true,
  })
  email!: string;

  @Column("varchar", { transformer: transformer.date, nullable: true })
  emailVerified!: string | null;

  @Column("varchar", { length: "MAX", nullable: true })
  image!: string | null;

  // @OneToMany(() => SessionEntity, (session) => session.userId)
  // sessions!: SessionEntity[];

  // @OneToMany(() => AccountEntity, (account) => account.userId)
  // accounts!: AccountEntity[];
}
