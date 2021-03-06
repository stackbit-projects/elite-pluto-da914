import {DeliveryClient} from '@kentico/kontent-delivery';

const PROJECT_ID = 'f71ad6dd-59c3-002a-7dc9-5bbf5521f1a3';

const deliveryClient = new DeliveryClient({
  projectId: PROJECT_ID,
  globalHeaders: () => [
    {
      header: 'X-KC-SOURCE',
      value: 'kontent-sample-app-svelte-sapper;1.0.0'
    }
  ]
});

export async function getProducts() {
  const response = await deliveryClient
    .items()
    .type('product')
    .depthParameter('1')
    .toPromise();
  return response.items;
}
