import css, { ResponsiveStyleValue, SystemStyleObject } from '@styled-system/css'
export const sx = (props: any) => css(props.sx)(props.theme) as any

type SxStyleProp =
  | SystemStyleObject
  | Record<
      string,
      | SystemStyleObject
      | ResponsiveStyleValue<number | string>
      | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
    >

export type SxProps = {
  sx?: SxStyleProp
}
