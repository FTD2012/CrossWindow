#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct main0_in
{
    float4 vB [[user(locn1)]];
    float4 vA [[user(locn0)]];
};

struct main0_out
{
    float4 FragColor [[color(0)]];
};

fragment main0_out main0(main0_in in [[stage_in]])
{
    main0_out out = {};
    out.FragColor = fmod(in.vA, in.vB);
    return out;
}

