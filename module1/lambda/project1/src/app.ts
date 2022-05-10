import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'
import { getUuid } from 'common/utils/uuid'



export const lambdaHandler = async ({ body, }: APIGatewayEvent): Promise<void> => {
  console.log(getUuid())
}