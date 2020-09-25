import { create_api } from  '@relateddigital/visilabs-react-native';
import Constants from 'expo-constants';
 
export const Euromessage = () => {
var organizationID = "46437177476C676D3745303D";
var siteID = "4C514C35383967586E56413D";
var segmentURL = "https://lgr.visilabs.net";
var dataSource = "supporttest";
var realTimeURL = "https://rt.visilabs.net";
var channel = Constants.platform.android === undefined ? "IOS" : "Android";
var euroMsgApplicationKey = "ExpoUtku";
var euroMsgSubscriptionURL = "hbrew cask install react-native-debuggerttps://pushs.euromsg.com/subscription";
var euroMsgRetentionURL = "https://pushr.euromsg.com/retention";   
// var locale = "tr-TR";
var api = create_api(organizationID, siteID, dataSource, realTimeURL, channel, euroMsgApplicationKey, euroMsgSubscriptionURL, euroMsgRetentionURL, "tr-TR");

return api;
}


