import { View, Text } from "react-native";
import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

export const SnusIcon = (props: SvgProps) => (
  <View>
    <Svg fill="none" {...props}>
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M13.459 1.429c.09-.201.034-.38-.143-.457-.176-.077-.442-.04-.68.098l-1.015.586-8.93 5.157L.862 7.867c-.238.138-.404.35-.425.54-.022.192.105.33.324.352l1.247.131-.51 1.145c-.114.253.007.463.284.492l1.246.131-.51 1.145c-.114.253.008.463.285.492l1.246.131-.51 1.145c-.09.201-.034.38.143.457.176.077.442.04.68-.098l1.827-1.055 8.93-5.156 1.016-.586c.238-.138.404-.35.425-.54.022-.192-.105-.33-.324-.352L14.99 6.11l.51-1.145c.113-.253-.008-.463-.285-.492l-1.246-.131.51-1.145c.114-.253-.008-.463-.285-.492l-1.246-.131.51-1.145Z"
        clipRule="evenodd"
      />
      <Path
        fill="#D9D9D9"
        d="m1.987 7.219.866-.5 3.5 6.062-.866.5zM10.647 2.219l.866-.5 3.5 6.062-.866.5z"
      />
    </Svg>
  </View>
);

export const RoykIcon = (props: SvgProps) => {
  return (
    <View>
      <Svg fill="none" {...props}>
        <G clipPath="url(#a)">
          <Path
            fill="#000"
            d="M9.8.688v.236c0 .82.332 1.607.923 2.187l.46.451c.459.451.717 1.064.717 1.702V5.5c0 .38-.313.688-.7.688a.693.693 0 0 1-.7-.688v-.236c0-.273-.112-.535-.308-.729l-.46-.45A4.432 4.432 0 0 1 8.4.923V.687c0-.38.313-.687.7-.687.387 0 .7.307.7.688ZM12.6 5.5v-.236c0-.821-.332-1.607-.923-2.187l-.46-.452A2.385 2.385 0 0 1 10.5.924V.687c0-.38.313-.687.7-.687.387 0 .7.307.7.688v.236c0 .273.112.535.308.728l.46.451A4.428 4.428 0 0 1 14 5.263V5.5c0 .38-.313.688-.7.688a.693.693 0 0 1-.7-.688ZM0 8.938c0-.759.628-1.376 1.4-1.376h7.7c.387 0 .7.308.7.688v2.063c0 .38-.313.687-.7.687H1.4C.628 11 0 10.383 0 9.625v-.688Zm4.9 0v.687h3.5v-.688H4.9Zm6.3-1.376c.387 0 .7.308.7.688v2.063c0 .38-.313.687-.7.687a.693.693 0 0 1-.7-.688V8.25c0-.38.313-.688.7-.688Zm2.1 0c.387 0 .7.308.7.688v2.063c0 .38-.313.687-.7.687a.693.693 0 0 1-.7-.688V8.25c0-.38.313-.688.7-.688Z"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h14v11H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export const PengespillIcon = (props: SvgProps) => {
  return (
    <View>
      <Svg fill="none" {...props}>
        <G clipPath="url(#a)">
          <Path
            fill="#000"
            d="M6.013.737a1.595 1.595 0 0 0-2.226 0L.75 3.719a1.527 1.527 0 0 0 0 2.187l3.037 2.982a1.595 1.595 0 0 0 2.226 0L9.05 5.906a1.528 1.528 0 0 0 0-2.187L6.013.737ZM4.375 4.812c0-.136.055-.267.154-.364a.53.53 0 0 1 .742 0 .511.511 0 0 1 0 .73.53.53 0 0 1-.742 0 .511.511 0 0 1-.154-.365ZM2.1 4.298a.53.53 0 0 1 .371.15.511.511 0 0 1 0 .73.53.53 0 0 1-.742 0 .511.511 0 0 1 0-.73.53.53 0 0 1 .371-.15Zm2.8 3.781a.53.53 0 0 1-.371-.15.511.511 0 0 1 0-.73.53.53 0 0 1 .742 0 .511.511 0 0 1 0 .73.53.53 0 0 1-.371.15Zm2.8-3.781a.53.53 0 0 1 .371.15.511.511 0 0 1 0 .73.53.53 0 0 1-.742 0 .511.511 0 0 1 0-.73.53.53 0 0 1 .371-.15ZM4.9 2.578a.53.53 0 0 1-.371-.15.511.511 0 0 1 0-.73.53.53 0 0 1 .742 0 .511.511 0 0 1 0 .73.53.53 0 0 1-.371.15ZM7 9.625C7 10.383 7.628 11 8.4 11h4.2c.772 0 1.4-.617 1.4-1.375V5.5c0-.758-.628-1.375-1.4-1.375h-2.5a2.206 2.206 0 0 1-.556 2.267L7 8.89v.735Zm3.5-2.578a.53.53 0 0 1 .371.15.51.51 0 0 1 0 .73.53.53 0 0 1-.742 0 .51.51 0 0 1 0-.73.53.53 0 0 1 .371-.15Z"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h14v11H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export const RusmidlerIcon = (props: SvgProps) => {
  return (
    <View>
      <Svg fill="none" {...props}>
        <G clipPath="url(#a)">
          <Path
            fill="#000"
            d="M2.528 2.063c-.598 0-1.084.461-1.084 1.03V5.5h2.167V3.094c0-.57-.485-1.031-1.083-1.031ZM0 3.093C0 1.764 1.13.689 2.528.689c1.397 0 2.528 1.076 2.528 2.406v4.812c0 1.33-1.131 2.407-2.528 2.407S0 9.236 0 7.905V3.094Zm12.524 5.488c-.16.264-.535.281-.763.066l-4.234-4.03c-.226-.215-.21-.574.07-.726a3.736 3.736 0 0 1 1.792-.454C11.384 3.438 13 4.976 13 6.876c0 .62-.174 1.203-.476 1.706ZM11.18 9.859a3.736 3.736 0 0 1-1.792.454c-1.995 0-3.611-1.539-3.611-3.438 0-.62.174-1.203.476-1.706.16-.264.535-.281.763-.066l4.234 4.03c.226.215.21.574-.07.726Z"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h13v11H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export const AlkoholIcon = (props: SvgProps) => {
  return (
    <View>
      <Svg fill="none" {...props}>
        <G clipPath="url(#a)">
          <Path
            fill="#000"
            d="M.813.625a.925.925 0 0 0-.615.217.533.533 0 0 0-.19.498l1.27 6.697c.144.768 1 1.338 2.01 1.338h6.424c1.008 0 1.864-.568 2.01-1.338l1.27-6.697a.532.532 0 0 0-.19-.498.935.935 0 0 0-.614-.217H.813Zm1.414 3.75-.475-2.5h9.496l-.475 2.5H2.227Z"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h13v10H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export const AnnetIcon = (props: SvgProps) => {
  return (
    <View>
      <Svg fill="none" {...props}>
        <G clipPath="url(#a)">
          <Path
            fill="#000"
            d="M9.918.528 8.594 1.85l3.555 3.555 1.323-1.324a1.75 1.75 0 0 0 0-2.474L12.395.528a1.75 1.75 0 0 0-2.475 0h-.002ZM7.976 2.469 1.602 8.846a2.425 2.425 0 0 0-.607 1.022l-.968 3.29a.656.656 0 0 0 .812.817l3.29-.968a2.424 2.424 0 0 0 1.023-.607l6.379-6.376-3.555-3.555Z"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h14v14H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};
