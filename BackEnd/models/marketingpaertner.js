const db = require ('../util/database');

module.exports = class Marketingpartner{
    constructor(companyname,tenure ,sponsorship,email){
        this.companyname=companyname;
        this.tenure=tenure;
        this.sponsorship=sponsorship;
        this.email=email;
        
    };
     
  static fetchAll(){
    return db.execute('SELECT* FROM marketingpartners ');
  }
    

    static save(marketingpartners) {                                    
    return db.execute('INSERT INTO marketingpartners (companyname, tenure,sponsorship,email) VALUES (?,?,?,?)',
     [marketingpartners.companyname, marketingpartners.tenure,marketingpartners.sponsorship,marketingpartners.email]
    )

    }             
};