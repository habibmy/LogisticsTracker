function ekartTrack(trackingId) {
  const url = "https://ekartlogistics.com/ws/getTrackingDetails";
  const options = {
    method: "POST",
    headers: {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    },
    payload: JSON.stringify({ trackingId }),
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const data = JSON.parse(response.getContentText());
    return data.shipmentTrackingDetails[data.shipmentTrackingDetails.length - 1].statusDetails
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function ecomTrack(trackingId){
  const url = "https://ecomexpress.in/api/track-awb";
  const options = {
    method: "POST",
    headers: {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    },
    payload: JSON.stringify({ "awb_field" :trackingId }),
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const data = JSON.parse(response.getContentText());
    return data.result.item_details.status_remark;
    // return data.result.item_details.status_remark
  } catch (error) {
    console.error(error);
  }
}

function delhiveryTrack(trackingId){
  const url = `https://dlv-api.delhivery.com/v3/unified-tracking?wbn=${trackingId}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const data = JSON.parse(response.getContentText());
    return data.data[0].status.status;
    // console.log(data.data[0].status.status)
  } catch (error) {
    console.error(error);
  }
}
