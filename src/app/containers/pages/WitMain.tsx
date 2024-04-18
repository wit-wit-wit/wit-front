import React from 'react';
import { SearchLayout } from 'app/components/layout/SearchLayout';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const MapWrapper = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 + 4rem);
`;

export const WitMain = () => {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_KEY, // 발급 받은 APPKEY
  });

  return (
    <>
      <MapWrapper>
        <SearchLayout />
        <Map
          center={{
            lat: 37.3326,
            lng: 126.97612,
          }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '100%',
          }}
          level={10}
        ></Map>
      </MapWrapper>
    </>
  );
};
