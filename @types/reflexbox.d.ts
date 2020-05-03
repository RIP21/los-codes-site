declare module 'reflexbox/styled-components' {
  import * as React from 'react'
  import {
    SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps,
  } from 'styled-system'
  import { StyledComponent, DefaultTheme } from 'styled-components'
  import { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css'

  type SxStyleProp =
    | SystemStyleObject
    | Record<
        string,
        | SystemStyleObject
        | ResponsiveStyleValue<number | string>
        | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
      >

  type SxProps = {
    sx?: SxStyleProp
  }

  type BoxProps = SpaceProps &
    LayoutProps &
    TypographyProps &
    ColorProps &
    SxProps &
    FlexboxProps & {
      as?: React.ElementType
    }

  export type BoxType = StyledComponent<
    JSX.IntrinsicElements['div'],
    DefaultTheme,
    BoxProps
  >

  export const Box: BoxType
  export const Flex: BoxType
}
