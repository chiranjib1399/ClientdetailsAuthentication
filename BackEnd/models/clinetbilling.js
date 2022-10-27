const db = require ('../util/database');

module.exports = class Clientdetails{
    constructor(clientname,Totalamount,Pending){
        this.clientname=clientname;
        this.Totalamount=Totalamount;
        this.Pending=Pending;
        
    };
     
  static fetchAll(){
    return db.execute('SELECT* FROM clientbilling ');
  }
    

    static save(clientbilling) {                                    
    return db.execute('INSERT INTO clientbilling (clientname,Totalamount,Pending) VALUES (?,?,?)',
     [clientbilling.clientname, clientbilling.Totalamount,clientbilling.Pending]
    )

    }  
    
    
};