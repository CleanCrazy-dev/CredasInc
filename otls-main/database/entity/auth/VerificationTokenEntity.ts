import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { transformer } from "./transformer";

@Entity({ name: "verification_tokens" })
export class VerificationTokenEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("nvarchar", { length: 2048 })
  token!: string;

  @Column("nvarchar")
  identifier!: string;

  @Column("nvarchar", { transformer: transformer.date })
  expires!: string;
}
