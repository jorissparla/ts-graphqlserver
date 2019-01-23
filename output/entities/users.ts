import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("users",{schema:"dbo"})
export class users {

    @Column("uniqueidentifier",{ 
        nullable:false,
        primary:true,
        default: () => "newsequentialid()",
        name:"id"
        })
    id:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"email"
        })
    email:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"password"
        })
    password:string;
        
}
