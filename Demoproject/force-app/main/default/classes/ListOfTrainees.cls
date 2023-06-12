public with sharing class ListOfTrainees {
    @AuraEnabled(cacheable=true)
    public static List<Devops_Test__c> getTrainees(){
        return[SELECT Id, Name, Training_Date__c, Training_Fees__c, Training_Topics__c, Trainee_Email__c, Trainee_Contact__c , CreatedById FROM Devops_Test__c WHERE CreatedById=:Userinfo.getUserId() limit 20];
}
}