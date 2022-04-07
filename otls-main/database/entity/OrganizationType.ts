import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
  name: "organization_types",
})
export class OrganizationType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  description!: string;
}
