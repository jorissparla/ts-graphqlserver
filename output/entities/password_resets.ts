import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("password_resets",{schema:"dbo"})
@Index("password_resets_email_index",["email",])
export class password_resets {

    @Column("nvarchar",{ 
        nullable:false,
        length:255,
        name:"email"
        })
    email:string;
        

    @Column("nvarchar",{ 
        nullable:false,
        length:255,
        name:"token"
        })
    token:string;
        

    @Column("datetime",{ 
        nullable:true,
        name:"created_at"
        })
    created_at:Date | null;
        
}
