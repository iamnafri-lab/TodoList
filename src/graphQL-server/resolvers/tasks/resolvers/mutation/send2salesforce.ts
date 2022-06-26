import { AuthenticationError } from 'apollo-server-express';
import jsforce from "jsforce";
const loginurl = "https://login.salesforce.com/";

const TaskStatusType: any = {
  INCOMPLETE: "Incomplete",
  COMPLETED: "Completed",
};

export const send2Salesforce = async (
  parent: any,
  {input}: any,
  { user }: any
) => {
  if (!user) throw new AuthenticationError("User must be login First");

  const conn = new jsforce.Connection({
    loginUrl: loginurl,
  });

  conn.login(input.sf_username, input.sf_password + input.sf_token, (err:any, userInfo:any) => {
    if (err) {
        console.log(input.sf_username, input.sf_password, input.sf_token);
        throw new AuthenticationError("Invalid Username, Password or token for SalesForce");
    } else {
    //   console.log(userInfo);
    }


    // let finaldate= new Date(input.sf_date * 1000);
    // console.log(input.sf_date);
    conn
      .sobject("Task")
      .create({ Subject: input.sf_text, ActivityDate: input.sf_date}, function (err : any, ret:any) {
        if (err || !ret.success) {
          throw new AuthenticationError(`Unable to Add Task to Your Salesforce : ${err}`);
        }
        // ...
      });
  });

  return {result : "Task has been added to your SalesForce"};
};
