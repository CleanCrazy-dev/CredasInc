import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { transformer } from "./transformer";
import { UserEntity } from "./UserEntity";

@Entity({ name: "accounts" })
export class AccountEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("nvarchar")
  type!: string;

  @Column("nvarchar")
  provider!: string;

  @Column("nvarchar")
  providerAccountId!: string;

  @Column("varchar", { length: 2048, nullable: true })
  // NOTE: should be string | null but the default entity is designated as string
  // see github issue for updates: https://github.com/nextauthjs/next-auth/issues/4055
  refresh_token!: any;

  @Column("varchar", { length: 2048, nullable: true })
  access_token!: string | null;

  // seems to be seconds (*not* milliseconds) past the epoch, hence not using date transformations
  @Column("bigint", { transformer: transformer.number, nullable: true })
  expires_at!: number | null;

  @Column("varchar", { nullable: true })
  token_type!: string | null;

  @Column("varchar", { nullable: true })
  scope!: string | null;

  @Column("varchar", { nullable: true, length: "MAX" })
  id_token!: string | null;

  @Column("varchar", { nullable: true, length: "MAX" })
  session_state!: string | null;

  @Column({ type: "uuid" })
  userId!: string;

  // @ManyToOne(() => UserEntity, (user) => user.accounts)
  @JoinColumn({ name: "userId" })
  user!: UserEntity;
}
