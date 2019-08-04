import { GatsbyNode, Actions } from 'gatsby'
declare module 'gatsby' {
  export interface GatsbyNode {
    createSchemaCustomization(arguments: {
      actions: Pick<
        Actions,
        'addThirdPartySchema' | 'createFieldExtension' | 'createTypes'
      >
    })
  }
}
