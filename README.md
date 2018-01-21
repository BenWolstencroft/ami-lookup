# ami-lookup
Lambda function for the lookup of the latest ami ID for amazon-linux, ubuntu, and windows >= 2012 R2 from public AWS AMI libraries

## Use in cloudformation

### Add parameters to your cloudformation template

Instance Type, you'll need this for the ami lookup function and your EC2 Instance or EC2 LaunchConfiguration

```yaml
  InstanceType:
    Description: Amazon EC2 instance type
    Type: String
    AllowedValues:
    - t1.micro
    - t2.micro
    - t2.small
    - t2.medium
    ConstraintDescription: Must be a valid EC2 instance type.
```

OSVersion, you'll need this for the ami lookup function

```yaml
  OSVersion:
    Description: The Operating System to look up the AMI for
    Type: String
    AllowedValues:
    - linux-amazon
    - linux-ubuntu-trusty
    - linux-ubuntu-xenial
    - linux-ubuntu-yakkety
    - linux-ubuntu-zesty
    - windows-2008-r2-64-bit
    - windows-2012-r2-64-bit
    - windows-2016-64-bit-core
    - windows-2016-64-bit-full
```

### Include the AMI Lookup function as a CustomResource in your template

```yaml
  AMILookup:
    Type: AWS::CloudFormation::CustomResource
    Properties:
      ServiceToken: arn:aws:lambda:aws-region:XXXXXXXXXX:function:ami-lookup
      Region: !Sub ${AWS::Region}
      OSName: windows
      Architecture: !Ref OSVersion
```

__Note:__ _Replace the ServiceToken attribute value with the arn of the AMI lookup function in your AWS account_

### Use the AMILookup CustomResource in your EC2 Instance or LaunchConfiguration

```yaml
  EC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: !GetAtt AMILookup.Id
      InstanceType: !Ref InstanceType
```

```yaml
  LaunchConfiguration:
    Type: AWS::EC2::LaunchConfiguration
    Properties:
      ImageId: !GetAtt AMILookup.Id
      InstanceType: !Ref InstanceType
```