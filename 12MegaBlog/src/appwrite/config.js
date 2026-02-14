import conf from "../conf/conf.js"
import { Client,    ID,Databases , } from 'appwrite';

export class Service{
    client = new Client();
    database; 
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client);
        this.bucket = new Bucket(this.client);

    }

    async createDocument({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.database.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                status,
                userId
            });
        } catch (error) {
            throw error;
        }
    }

    

}