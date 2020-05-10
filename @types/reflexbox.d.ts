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

  type BoxTypeProps = SpaceProps &
    LayoutProps &
    TypographyProps &
    ColorProps &
    SxProps &
    FlexboxProps & {
      as?: React.ElementType
    }

  export type BoxProps<T extends keyof JSX.IntrinsicElements = 'div'> = BoxTypeProps &
    JSX.IntrinsicElements[T]

  export type BoxType = StyledComponent<
    JSX.IntrinsicElements['div'],
    DefaultTheme,
    BoxTypeProps
  >

  export const Box: BoxType
  export const Flex: BoxType
}
