import scopeCheck from './index.js';

scopeCheck({header:'x-scope'})
scopeCheck({scope:'user'})
scopeCheck({status:200})
scopeCheck({scopes:['admin','user'], status:401,header:'x-scope'})
