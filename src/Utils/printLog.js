const isDebug = true;
export function printLog(data) {
  //Print log based on debug or release mode of app
  if (isDebug) {
    console.log('========' + data);
  }
}
