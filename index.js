var namePatterns = {
    "linux-amazon": {
        "PV64": { Pattern: "amzn-ami-pv*.x86_64-ebs", Owners: ["amazon"] },
        "HVM64": { Pattern: "amzn-ami-hvm*.x86_64-gp2", Owners: ["amazon"] },
        "HVMG2": { Pattern: "amzn-ami-graphics-hvm-*x86_64-ebs*", Owners: ["679593333241"] }
    },
    "linux-ubuntu-trusty": {
        "PV64": { Pattern: "ubuntu/images/ubuntu-trusty-14.04-amd64-server-*", Owners: ["099720109477"] },
        "HVM64": { Pattern: "ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-*", Owners: ["099720109477"] }
    },
    "linux-ubuntu-xenial": {
        "PV64": { Pattern: "ubuntu/images/ubuntu-xenial-16.04-amd64-server-*", Owners: ["099720109477"] },
        "HVM64": { Pattern: "ubuntu/images/hvm-ssd/ubuntu-xenial-16.04-amd64-server-*", Owners: ["099720109477"] }
    },
    "linux-ubuntu-yakkety": {
        "PV64": { Pattern: "ubuntu/images/ubuntu-yakkety-16.10-amd64-server-*", Owners: ["099720109477"] },
        "HVM64": { Pattern: "ubuntu/images/hvm-ssd/ubuntu-yakkety-16.10-amd64-server-*", Owners: ["099720109477"] }
    },
    "linux-ubuntu-zesty": {
        "PV64": { Pattern: "ubuntu/images/ubuntu-zesty-17.04-amd64-server-*", Owners: ["099720109477"] },
        "HVM64": { Pattern: "ubuntu/images/hvm-ssd/ubuntu-zesty-17.04-amd64-server-*", Owners: ["099720109477"] }
    },
    "windows-2008-r2-64-bit": {
        "PV64": { Pattern: "Windows_Server-2008-R2_SP1-English-64Bit-Base-*", Owners: ["amazon"] },
        "HVM64": { Pattern: "Windows_Server-2008-R2_SP1-English-64Bit-Base-*", Owners: ["amazon"] },
        "HVMG2": { Pattern: "Windows_Server-2008-R2_SP1-English-64Bit-Base-*", Owners: ["amazon"] }
    },
    "windows-2012-r2-64-bit": {
        "PV64": { Pattern: "Windows_Server-2012-R2_RTM-English-64Bit-Base-*", Owners: ["amazon"] },
        "HVM64": { Pattern: "Windows_Server-2012-R2_RTM-English-64Bit-Base-*", Owners: ["amazon"] },
        "HVMG2": { Pattern: "Windows_Server-2012-R2_RTM-English-64Bit-Base-*", Owners: ["amazon"] }
    },
    "windows-2016-64-bit-core": {
        "PV64": { Pattern: "Windows_Server-2016-English-Core-Base-*", Owners: ["amazon"] },
        "HVM64": { Pattern: "Windows_Server-2016-English-Core-Base-*", Owners: ["amazon"] },
        "HVMG2": { Pattern: "Windows_Server-2016-English-Core-Base-*", Owners: ["amazon"] }
    },
    "windows-2016-64-bit-full": {
        "PV64": { Pattern: "Windows_Server-2016-English-Full-Base-*", Owners: ["amazon"] },
        "HVM64": { Pattern: "Windows_Server-2016-English-Full-Base-*", Owners: ["amazon"] },
        "HVMG2": { Pattern: "Windows_Server-2016-English-Full-Base-*", Owners: ["amazon"] }
    }
};

var instanceTypeToArch = {
    // General Purpose
    "t2.nano": ["HVM64"],
    "t2.micro": ["HVM64"],
    "t2.small": ["HVM64"],
    "t2.medium": ["HVM64"],
    "t2.large": ["HVM64"],
    "t2.xlarge": ["HVM64"],
    "t2.2xlarge": ["HVM64"],
    "m3.medium": ["HVM64", "PV64"],
    "m3.large": ["HVM64", "PV64"],
    "m3.xlarge": ["HVM64", "PV64"],
    "m3.2xlarge": ["HVM64", "PV64"],
    "m4.large": ["HVM64"],
    "m4.xlarge": ["HVM64"],
    "m4.2xlarge": ["HVM64"],
    "m4.4xlarge": ["HVM64"],
    "m4.10xlarge": ["HVM64"],
    "m4.16xlarge": ["HVM64"],
    "m5.large": ["HVM64"],
    "m5.xlarge": ["HVM64"],
    "m5.2xlarge": ["HVM64"],
    "m5.4xlarge": ["HVM64"],
    "m5.12xlarge": ["HVM64"],
    "m5.24xlarge": ["HVM64"],
    // Compute Optimised
    "c3.large": ["HVM64", "PV64"],
    "c3.xlarge": ["HVM64", "PV64"],
    "c3.2xlarge": ["HVM64", "PV64"],
    "c3.4xlarge": ["HVM64", "PV64"],
    "c3.8xlarge": ["HVM64", "PV64"],
    "c4.large": ["HVM64"],
    "c4.xlarge": ["HVM64"],
    "c4.2xlarge": ["HVM64"],
    "c4.4xlarge": ["HVM64"],
    "c4.8xlarge": ["HVM64"],
    "c5.large": ["HVM64"],
    "c5.xlarge": ["HVM64"],
    "c5.2xlarge": ["HVM64"],
    "c5.4xlarge": ["HVM64"],
    "c5.9xlarge": ["HVM64"],
    "c5.18xlarge": ["HVM64"],
    //Memory Optimised
    "r3.large": ["HVM64"],
    "r3.xlarge": ["HVM64"],
    "r3.2xlarge": ["HVM64"],
    "r3.4xlarge": ["HVM64"],
    "r3.8xlarge": ["HVM64"],
    "r4.large": ["HVM64"],
    "r4.xlarge": ["HVM64"],
    "r4.2xlarge": ["HVM64"],
    "r4.4xlarge": ["HVM64"],
    "r4.8xlarge": ["HVM64"],
    "r4.16xlarge": ["HVM64"],
    "x1.16xlarge": ["HVM64"],
    "x1.32xlarge": ["HVM64"],
    "x1e.xlarge": ["HVM64"],
    "x1e.2xlarge": ["HVM64"],
    "x1e.4xlarge": ["HVM64"],
    "x1e.8xlarge": ["HVM64"],
    "x1e.16xlarge": ["HVM64"],
    "x1e.32xlarge": ["HVM64"],
    // Storage Optimised
    "d2.xlarge": ["HVM64"],
    "d2.2xlarge": ["HVM64"],
    "d2.4xlarge": ["HVM64"],
    "d2.8xlarge": ["HVM64"],
    "h1.2xlarge": ["HVM64"],
    "h1.4xlarge": ["HVM64"],
    "h1.8xlarge": ["HVM64"],
    "h1.16xlarge": ["HVM64"],
    "i2.xlarge": ["HVM64"],
    "i2.2xlarge": ["HVM64"],
    "i2.4xlarge": ["HVM64"],
    "i2.8xlarge": ["HVM64"],
    "i3.large": ["HVM64"],
    "i3.xlarge": ["HVM64"],
    "i3.2xlarge": ["HVM64"],
    "i3.4xlarge": ["HVM64"],
    "i3.8xlarge": ["HVM64"],
    "i3.16xlarge": ["HVM64"],
    // Accelerated Computing
    "f1.2xlarge": ["HVM64"],
    "f1.16xlarge": ["HVM64"],
    "g2.2xlarge": ["HVMG2"],
    "g2.8xlarge": ["HVMG2"],
    "g3.4xlarge": ["HVM64"],
    "g3.8xlarge": ["HVM64"],
    "g3.16xlarge": ["HVM64"],
    "p2.xlarge": ["HVM64"],
    "p2.8xlarge": ["HVM64"],
    "p2.16xlarge": ["HVM64"],
    "p3.2xlarge": ["HVM64"],
    "p3.8xlarge": ["HVM64"],
    "p3.16xlarge": ["HVM64"]
};

var aws = require("aws-sdk");

exports.handler = function (event, context) {
    console.log("REQUEST RECEIVED:\n" + JSON.stringify(event));

    if (event.RequestType == "Delete") {
        sendResponse(event, context, "SUCCESS");
        return;
    }

    var responseStatus = "FAILED";
    var responseData = {};

    var region = event.ResourceProperties.Region;
    var osVersion = event.ResourceProperties.OSVersion;
    var instanceType = event.ResourceProperties.InstanceType;
    var preferredArch = event.ResourceProperties.PreferredArch;

    if (!preferredArch || preferredArch === undefined || preferredArch === null || preferredArch == "") {
        if (instanceType.match(/g2\..*/)) preferredArch = "HVMG2"
        else preferredArch = "HVM64";
    }

    var instanceArchitectures = instanceTypeToArch[instanceType];
    if (!instanceArchitectures.indexOf(preferredArch) == -1) {
        responseData = { Error: (instanceType + " does not support architecture " + preferredArch) };
        console.log(responseData.Error + ":\n");

    } else {

        var ec2 = new aws.EC2({ region: region });

        var matchImage = namePatterns[osVersion][preferredArch];

        var describeImagesParams = {
            Filters: [{ Name: "name", Values: [matchImage.Pattern] }]
        };
        if (matchImage.Owners) describeImagesParams.Owners = matchImage.Owners;

        ec2.describeImages(describeImagesParams, function (err, describeImagesResult) {
            if (err) {
                responseData = { Error: "DescribeImages call failed" };
                console.log(responseData.Error + ":\n", err);
            }
            else {
                var images = describeImagesResult.Images;
                images.sort(function (x, y) { return y.Name.localeCompare(x.Name); });
                for (var j = 0; j < images.length; j++) {
                    if (isBeta(images[j].Name)) continue;
                    responseStatus = "SUCCESS";
                    responseData["Id"] = images[j].ImageId;
                    break;
                }
            }
            sendResponse(event, context, responseStatus, responseData);
        });
    }
};

function isBeta(imageName) {
    return imageName.toLowerCase().indexOf("beta") > -1 || imageName.toLowerCase().indexOf(".rc") > -1;
}

function sendResponse(event, context, responseStatus, responseData) {

    var responseBody = JSON.stringify({
        Status: responseStatus,
        Reason: "See the details in CloudWatch Log Stream: " + context.logStreamName,
        PhysicalResourceId: context.logStreamName,
        StackId: event.StackId,
        RequestId: event.RequestId,
        LogicalResourceId: event.LogicalResourceId,
        Data: responseData
    });

    console.log("RESPONSE BODY:\n", responseBody);

    var https = require("https");
    var url = require("url");

    var parsedUrl = url.parse(event.ResponseURL);
    var options = {
        hostname: parsedUrl.hostname,
        port: 443,
        path: parsedUrl.path,
        method: "PUT",
        headers: {
            "content-type": "",
            "content-length": responseBody.length
        }
    };

    console.log("SENDING RESPONSE...\n");

    var request = https.request(options, function (response) {
        console.log("STATUS: " + response.statusCode);
        console.log("HEADERS: " + JSON.stringify(response.headers));
        context.done();
    });

    request.on("error", function (error) {
        console.log("sendResponse Error:" + error); 
        context.done();
    });
    
    request.write(responseBody);
    request.end();
}