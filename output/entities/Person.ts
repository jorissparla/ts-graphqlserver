import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("Person",{schema:"dbo"})
export class Person {

    @Column("int",{ 
        nullable:true,
        name:"BusinessEntityID"
        })
    BusinessEntityID:number | null;
        

    @Column("int",{ 
        nullable:true,
        name:"NationalIDNumber"
        })
    NationalIDNumber:number | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:100,
        name:"JobTitle"
        })
    JobTitle:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:200,
        name:"BirthDate"
        })
    BirthDate:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        length:2,
        name:"Gender"
        })
    Gender:string | null;
        

    @Column("nvarchar",{ 
        nullable:true,
        name:"Contact"
        })
    Contact:string | null;
        
}
