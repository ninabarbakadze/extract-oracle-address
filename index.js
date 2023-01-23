import { AzureHSMWallet } from '@celo/wallet-hsm-azure/lib/azure-hsm-wallet.js'

const AZURE_VAULT_NAME = ''

async function setupWallet()  {
    process.env.AZURE_TENANT_ID = ''
    process.env.AZURE_VAULT_NAME = AZURE_VAULT_NAME
    const akvWallet = await new AzureHSMWallet(AZURE_VAULT_NAME)
    await akvWallet.init()
    let accts = await akvWallet.getAccounts()
    let acc = accts[0]
    console.log(`${AZURE_VAULT_NAME}`, acc)
}


console.log('Running...')
setupWallet()
