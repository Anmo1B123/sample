const healthcheck = asyncHandler(async (req, res) => {
    console.log("Client ip: ", req.clientIp);
    return res
      .status(200)
      .json(new ApiResponse(200, "OK", "Health check passed"));
  });
  
  export { healthcheck };