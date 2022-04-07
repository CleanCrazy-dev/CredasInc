import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import { OrganizationType } from "./OrganizationType";

@Entity({
  name: "organizations",
})
export class Organization {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  name!: string;

  @ManyToOne(() => OrganizationType, { eager: true })
  type!: OrganizationType;

  @Column("varchar")
  created_by!: string;

  @Column("varchar")
  location!: string;

  @Column("varchar")
  contact_name!: string;

  @Column("varchar")
  phone!: string;

  @Column("varchar")
  street_address!: string;

  @Column("varchar")
  city!: string;

  @Column("varchar")
  state!: string;

  @Column("varchar")
  postal_code!: string;

  @Column("varchar")
  email!: string;

  @CreateDateColumn({
    type: "datetime",
    default: () => "GETUTCDATE()",
  })
  created_at!: Date;

  @UpdateDateColumn({
    type: "datetime",
    default: () => "GETUTCDATE()",
    onUpdate: "GETUTCDATE()",
  })
  updated_at!: Date;
}
